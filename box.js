class Box
  {
    constructor()
    {
      this.x = 175
      this.y = 175
      this.w = 50
      this.h = 50

    }
    show() 
    {
      rect(this.x,this.y,this.w,this.h)
    }
    speed(v)
    {
      this.x += v
    }
  }
