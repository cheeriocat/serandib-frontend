import React, { useEffect, useRef } from 'react';

interface HeroShaderProps {
  className?: string;
  speed?: number; // default: 0.2
  colorBlue?: [number, number, number]; // RGB normalized (0.0 - 1.0)
  colorOrange?: [number, number, number]; // RGB normalized
  colorWhite?: [number, number, number]; // RGB normalized
}

export const HeroShader: React.FC<HeroShaderProps> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none",
  speed = 0.2,
  colorBlue = [0.0, 0.447, 0.737],
  colorOrange = [0.925, 0.451, 0.125],
  colorWhite = [0.976, 0.976, 0.988],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) {
      console.warn("WebGL not supported in this browser");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      uniform vec3 u_color_blue;
      uniform vec3 u_color_orange;
      uniform vec3 u_color_white;
      uniform float u_speed;

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        float t = u_time * u_speed;
        
        float n1 = smoothNoise(uv * 3.0 + t);
        float n2 = smoothNoise(uv * 5.0 - t * 0.8);
        float n3 = smoothNoise(uv * 2.0 + t * 0.5 + u_mouse.x / u_resolution.x);
        
        float combined = mix(n1, n2, 0.5);
        combined = mix(combined, n3, 0.3);
        
        vec3 color = u_color_white;
        float blueMask = smoothstep(0.4, 0.7, combined);
        color = mix(color, u_color_blue, blueMask * 0.15);
        
        float orangeMask = smoothstep(0.6, 0.9, n2);
        color = mix(color, u_color_orange, orangeMask * 0.08);
        
        float vignette = 1.0 - length(p * 0.5);
        color *= mix(0.95, 1.0, vignette);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(glContext: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader compilation error:", glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Positions (quad coords)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]), gl.STATIC_DRAW);
    const posLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    // Texture coords
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0, 0,
      1, 0,
      0, 1,
      0, 1,
      1, 0,
      1, 1
    ]), gl.STATIC_DRAW);
    const texLocation = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texLocation);
    gl.vertexAttribPointer(texLocation, 2, gl.FLOAT, false, 0, 0);

    // Get Uniform locations
    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uColorBlue = gl.getUniformLocation(program, "u_color_blue");
    const uColorOrange = gl.getUniformLocation(program, "u_color_orange");
    const uColorWhite = gl.getUniformLocation(program, "u_color_white");
    const uSpeed = gl.getUniformLocation(program, "u_speed");

    let mouseX = canvas.clientWidth / 2;
    let mouseY = canvas.clientHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        mouseX = nx * canvas.width;
        mouseY = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Sync drawing buffer with display size
    const resizeCanvas = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    resizeCanvas();

    let animationFrameId: number;

    const render = (time: number) => {
      resizeCanvas();

      gl.useProgram(program);

      // Set Uniform values
      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseX, mouseY);
      
      if (uColorBlue) gl.uniform3fv(uColorBlue, colorBlue);
      if (uColorOrange) gl.uniform3fv(uColorOrange, colorOrange);
      if (uColorWhite) gl.uniform3fv(uColorWhite, colorWhite);
      if (uSpeed) gl.uniform1f(uSpeed, speed);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      // Clean up WebGL resources
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(texCoordBuffer);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
    };
  }, [speed, colorBlue, colorOrange, colorWhite]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};
