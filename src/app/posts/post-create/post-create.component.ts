import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
    selector: 'app-post-component',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

    enteredContent = '';
    enteredTitle = '';
    postCreated = new EventEmitter<Post>();

    constructor(public postsService: PostsService) {}



    ngOnInit() {}

    onAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        /*const post: Post = {title: form.value.title,
                      content: form.value.content };*/
        this.postsService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}
