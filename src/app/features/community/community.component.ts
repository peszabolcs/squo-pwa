import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface CommunityPost {
  id: number;
  username: string;
  content: string;
  timeAgo: string;
  likes: number;
  hasLiked?: boolean;
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {
  posts: CommunityPost[] = [
    {
      id: 1,
      username: 'Felhasználó1',
      content: 'Szeretem a cseresznye ízt!',
      timeAgo: '2 órája',
      likes: 12,
    },
    {
      id: 2,
      username: 'Felhasználó2',
      content: 'A málna a kedvencem, örülök a kedvezménynek!',
      timeAgo: '5 órája',
      likes: 8,
    },
    {
      id: 3,
      username: 'Felhasználó3',
      content: 'Nagyon jó ötlet ez az alkalmazás, könnyű használni.',
      timeAgo: '1 napja',
      likes: 15,
    },
    {
      id: 4,
      username: 'Felhasználó4',
      content: 'Több automatát szeretnék látni a belvárosban!',
      timeAgo: '2 napja',
      likes: 7,
    },
  ];

  newPostContent: string = '';

  constructor(private router: Router, private location: Location) {}

  navigateBack() {
    this.location.back();
  }

  likePost(post: CommunityPost) {
    if (post.hasLiked) {
      post.likes--;
      post.hasLiked = false;
    } else {
      post.likes++;
      post.hasLiked = true;
    }
  }

  addNewPost() {
    if (this.newPostContent.trim()) {
      const newPost: CommunityPost = {
        id: this.posts.length + 1,
        username: 'Én',
        content: this.newPostContent,
        timeAgo: 'épp most',
        likes: 0,
        hasLiked: false,
      };
      this.posts.unshift(newPost);
      this.newPostContent = '';
    }
  }
}
