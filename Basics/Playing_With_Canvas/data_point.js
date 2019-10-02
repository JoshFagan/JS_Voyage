class DataPoint
{
    constructor( x_max, y_max )
    {
        if( x_max == undefined )
        {
            x_max = 101;
        }
        if( y_max == undefined )
        {
            y_max = 101;
        }

        // Assign x and y positions to be random values between 0 and 100
        this._x = Math.floor(Math.random() * x_max);
        this._y = Math.floor(Math.random() * y_max);

        // Assign classification target to unassigned
        this._target = -1
    }


    get x()
    {
        return this._x;
    }

    set x( new_x)
    {
        if( typeof(new_x) == "number" )
        {
            this._x = new_x;
        }
    }

    get y()
    {
        return this._y;
    }

    set y( new_y )
    {
        if( typeof(new_y) == "number" )
        {
            this._y = new_y;
        }
    }

    get target()
    {
        return this._target;
    }

    set target( new_target )
    {
        if( typeof(new_target) == "number" )
        {
            this._target = new_target;
        }
    }

    drawDataPoint( canvasID )
    {
        var colors = ["#666666", "#5e81b0", "#b94c46"];

        var c = document.getElementById( canvasID )
        var ctx = c.getContext("2d");

        ctx.fillStyle = colors[this.target+1];

        ctx.beginPath();
        ctx.arc(this._x, this._y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}
