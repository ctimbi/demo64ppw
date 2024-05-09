import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  post?: any
  comments: any
  posts: any
  photos: any

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.getAllPost().subscribe(data => {
      this.posts = data
    })

  }

  detailPost(id: number){
    this.postService.getPost(id).subscribe(data => {
      this.post = data
    })
    this.postService.getPostComments(id).subscribe(data => {
      this.comments = data
    })
  }

  add(){
    console.log('clci')
    this.postService.addMensaje('hola')
  }
}
