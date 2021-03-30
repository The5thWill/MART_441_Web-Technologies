class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}

class Circle{

    constructor(xCoord,yCoord,objectdiameter, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectdiameter = objectdiameter;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get diameter()
    {
        return this.objectdiameter;
    }
    get mainColor()
    {
        return this.color;
    }
}
