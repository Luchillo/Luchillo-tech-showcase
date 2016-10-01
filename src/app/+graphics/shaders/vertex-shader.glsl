attribute vec4 coords;
attribute float pointSize;
void main() {
  gl_Position = coords;
  gl_PointSize = pointSize;
}
