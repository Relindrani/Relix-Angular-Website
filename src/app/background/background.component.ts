import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let c= <HTMLCanvasElement>document.getElementById("c");
    let ctx=c.getContext("2d");
    c.height=$(document).height();
    c.width=window.innerWidth;
    let binaryString: string="АБВГДЕЖЗІКЛМНОПРСТУФХЧШЕЮЯ";
    let binaryArray: string[];
    binaryArray=binaryString.split("");
    let fontSize=8;
    let columns=c.width/fontSize;
    let drops=[];
    for(var i=0;i<columns;i++)drops[i]=c.height/fontSize;

    window.addEventListener("resize", resizeCanvas, false);
    function resizeCanvas(){
      c.width = window.innerWidth;
      c.height = $(document).height();
      columns = c.width/fontSize;
      for(var i=0;i<columns;i++)drops[i]=c.height/fontSize;
    }

    function draw(){
      ctx.fillStyle="rgba(0, 0, 0,0.05)";
      ctx.fillRect(0,0,c.width,c.height);
      ctx.fillStyle="#28ffc5";
      ctx.font=fontSize+"px arial";
      for(let i=0;i<drops.length;i++){
        let text=binaryArray[Math.floor(Math.random()*binaryArray.length)];
        ctx.fillText(text,i*fontSize,c.height-drops[i]*2*fontSize);

        if(drops[i]*fontSize<0 && Math.random()>0.975)drops[i]=c.height/fontSize;	
        drops[i]--;
      }
    }
    setInterval(draw,33);
  }

}
