class Sandglass {
  constructor(dimension) {
    this.dimension = dimension;
  }

  drawInicialState() {
    process.stdout.write("\n");
    for (let i = 1; i <= this.dimension; i++) {
      for (let j = 1; j <= this.dimension; j++) {
        if (j < i) {
          if (j === 1) process.stdout.write("#");
          else process.stdout.write(" ");
        } else process.stdout.write("#");
      }

      for (let j = 1; j <= this.dimension; j++) {
        if (j <= this.dimension - (i - 1)) process.stdout.write("#");
        else {
          if (j === this.dimension) process.stdout.write("#");
          else process.stdout.write(" ");
        }
      }

      process.stdout.write("\n");
    }

    for (let i = 1; i <= this.dimension; i++) {
      for (let j = i; j <= this.dimension; j++) {
        if (j === 1 || i === j || j === this.dimension) {
          if (i === this.dimension) {
            for (let k = 1; k <= this.dimension; k++) {
              process.stdout.write("#");
            }
          } else {
            process.stdout.write("#");
          }
        } else process.stdout.write(" ");
      }

      for (let j = 1; j <= i; j++) {
        if (i === j || i === this.dimension) {
          process.stdout.write("#");
        } else {
          process.stdout.write("  ");
        }
      }

      for (let j = i; j <= this.dimension - 1; j++) {
        if (j === this.dimension - 1) {
          process.stdout.write("#");
        } else {
          process.stdout.write(" ");
        }
      }
      process.stdout.write("\n");
    }
  }

  drawFinalState() {
    process.stdout.write("\n");
    for (let i = 1; i <= this.dimension; i++) {
      for (let j = 1; j <= i; j++) {
        if (j === 1 || i === j) {
          process.stdout.write("#");
        } else {
          process.stdout.write(" ");
        }
      }

      for (let j = i; j <= this.dimension - 1; j++) {
        if (i === 1) {
          process.stdout.write("#");
        } else {
          process.stdout.write(" ");
        }
      }

      for (let j = i; j <= this.dimension - 1; j++) {
        if (i === 1) process.stdout.write("#");
        else process.stdout.write(" ");
      }

      for (let j = 1; j <= i; j++) {
        if (j === i || j === 1) process.stdout.write("#");
        else process.stdout.write(" ");
      }
      process.stdout.write("\n");
    }

    for (let i = 1; i <= this.dimension; i++) {
      for (let j = i; j <= this.dimension - 1; j++) {
        if (j === i) process.stdout.write("#");
        else process.stdout.write(" ");
      }

      for (let j = 1; j <= i; j++) {
        process.stdout.write("#");
      }

      for (let j = 1; j <= i; j++) {
        process.stdout.write("#");
      }

      for (let j = i; j <= this.dimension - 1; j++) {
        if (j === this.dimension - 1) {
          process.stdout.write("#");
        } else {
          process.stdout.write(" ");
        }
      }
      process.stdout.write("\n");
    }
  }
}

module.exports = Sandglass;
