function Circle(option) {
    this._init(option);
}
Circle.prototype=({
    _init: function (option) {
        this.x=option.x;
        this.y=option.y;
        this.outRadius=option.outRadius;
        this.innRadius=option.innRadius;
        this.outColor=option.outColor;
        this.innColor=option.innColor;
        this.text=option.text;
        this.outOpacity=option.outOpacity;
        this.innOpacity=option.innOpacity;
        this.angle=option.angle;
        this.fontSize=option.fontSize ||16;
        this.fontColor=option.fontColor ||"white";
        this.fontFamily=option.fontFamily ||'Calibri';
        this.group = new Konva.Group({
            x: this.x,
            y: this.y
        });
        this.draw();
    },
    draw: function () {
        var ring=new Konva.Ring({
            x:0,
            y:0,
            outerRadius:this.outRadius,
            innerRadius:this.innRadius,
            opacity:this.outOpacity,
            fill:this.outColor
        });
        this.group.add(ring);
        var circle=new Konva.Circle({
            x:0,
            y:0,
            radius:this.innRadius,
            fill:this.innColor,
            opacity:this.innOpacity
        });
        this.group.add(circle);
        var text=new Konva.Text({
            x: -this.innRadius ,
            y: -this.fontSize / 2,
            text: this.text,
            fill: this.fontColor,
            fontSize: this.fontSize,
            width: this.innRadius * 2,
            align: "center"
        });
        this.group.add(text);
    },
    addToGroupOrLayer: function(groupOrLayer) {
        groupOrLayer.add(this.group);
    }

})

window.onload= function () {
    
}