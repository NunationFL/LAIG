#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

attribute vec2 aTextureCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform float x;
uniform float y;
uniform float width;
uniform float height;

void main() {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

	vTextureCoord = vec2(aTextureCoord.x*width + x, aTextureCoord.y*height + y);
}

