import "./styles.css";
function Calculate(pivot) {
  alert(pivot);
  /*var calc = new Calculator(
    document.getElementById("c"),
    document.getElementById("r1"),
    document.getElementById("r2"),
    document.getElementById("f"),
    document.getElementById("dc"),
    document.getElementById("t"),
    document.getElementById("th"),
    document.getElementById("tl"),
    pivot);*/
}

class Calculator {
  constructor(c, r1, r2, f, dc, t, th, tl, focus) {
    this.c = c;
    this.r1 = r1;
    this.r2 = r2;
    this.f = f;
    this.dc = dc;
    this.t = t;
    this.th = th;
    this.tl = tl;
    this.focus = focus;
  }
  Get_C() {
    var output = this.c;
    if (this.r2 != 0) {
      if (this.r1 != 0) {
        if (this.f != 0) {
          output = (this.f * (this.r1 + 2 * this.r2)) / 1.44;
        } else if (this.t != 0) {
          output = this.t / 0.693 / (this.r1 + 2 * this.r2);
        } else if (this.th != 0) {
          output = this.th / 0.693 / (this.r1 + this.r2);
        }
      } else if (this.tl != 0) {
        output = this.tl / 0.693 / this.r2;
      }
    }
    return output;
  }

  Get_R1() {
    var output = this.r1;
    if (this.r2 != 0) {
      if (this.c != 0) {
        if (this.f != 0) {
          output = (this.c / this.f) * 1.44 - 2 * this.r2;
        } else if (this.t != 0) {
          output = this.t / this.c1 / 0.693 - 2 * this.r2;
        } else if (this.th != 0) {
          output = thisf.th / this.c1 / 0.693 - this.r2;
        }
      }
    }
    return output;
  }

  Get_R2() {
    var output = this.r2;
    if (this.c != 0) {
      if (this.r1 != 0) {
        if (this.f != 0) {
          output = ((this.c / this.f) * 1.44 - this.r1) / 2;
        } else if (this.t != 0) {
          output = (t / c1 / 0.693 - r1) / 2;
        } else if (this.th != 0) {
          output = this.th / this.c / 0.693 - this.r1;
        }
      } else if (this.tl != 0) {
        output = this.tl / this.c / 0.693;
      }
    }
    return output;
  }

  Get_F() {
    var output = this.f;
    if (this.c != 0 && this.r1 != 0 && this.r2 != 0) {
      output = (1.44 / (this.r1 + 2 * this.r2)) * this.c;
    } else if (this.t != 0) {
      output = 1 / this.t;
    }
    return output;
  }
  Get_DC() {
    var output = this.dc;
    if (this.th != 0) {
      if (this.t != 0) {
        output = (this.th / this.t) * 100;
      }
    } else if (this.th != 0) {
      output = (this.tl / (this.th + this.tl)) * 100;
    }

    return output;
  }
  Get_T() {
    var output = this.t;
    if (this.r1 != 0 && this.r2 != 0 && this.c != 0) {
      output = 0.693 * (this.r1 + 2 * this.r2) * this.c;
    } else if (this.f != 0) {
      output = 1 / this.f;
    } else if (this.th != 0 && this.tl != 0) {
      output = this.th + this.tl;
    }

    return output;
  }
  Get_TH() {
    var output = this.th;
    if (this.tl != 0 && this.t != 0) {
      output = this.t - this.tl;
    } else if (this.r1 != 0 && this.r2 != 0 && this.c != 0) {
      output = 0.693 * (this.r1 + this.r2) * this.c;
    }

    return output;
  }
  Get_TL() {
    var output = this.tl;
    if (this.th != 0 && this.t != 0) {
      output = this.t - this.th;
    } else if (this.r2 != 0 && this.c != 0) {
      output = 0.693 * this.r2 * this.c;
    }

    return output;
  }
  Fill() {
    var output = [];

    if (this.focus != 0) {
      this.Get_C();
    }
    output.push(this.c);

    if (this.focus != 1) {
      this.r1 = this.Get_R1();
    }
    output.push(this.r1);

    if (this.focus != 2) {
      this.r2 = this.Get_R2();
    }
    output.push(this.r2);

    if (this.focus != 3) {
      this.f = this.Get_F();
    }
    output.push(this.f);

    if (this.focus != 4) {
      this.dc = this.Get_DC();
    }
    output.push(this.dc);

    if (this.focus != 5) {
      this.t = this.Get_T();
    }
    output.push(this.t);

    if (this.focus != 6) {
      this.th = this.Get_TH();
    }
    output.push(this.th);

    if (this.focus != 7) {
      this.tl = this.Get_TL();
    }
    output.push(this.tl);

    return output;
  }
  Complete() {
    var old = [];
    var current = this.Fill();
    while (current != old || current.indexOf(0) != -1) {
      old = current;
      current = this.Fill();
    }
    return current;
  }
}
