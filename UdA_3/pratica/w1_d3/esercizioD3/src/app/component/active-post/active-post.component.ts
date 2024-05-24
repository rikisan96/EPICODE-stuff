import { Component, Input, input } from '@angular/core';
import { Post } from '../../Models/_post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {



@Input() post?:Post

ngOnInit(){}

async getActivePost(){
  const res = await fetch('esercizioD3/src/assets/db.json')
}


}
