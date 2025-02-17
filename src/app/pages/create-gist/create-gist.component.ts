import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GistsService } from '../../services/gists.service';
import { CreateFile, CreateGist } from '../../types/gists.types';
import { SharedLayoutsModule } from '../../components/layouts/layouts.module';
import { PageWrapperModule } from '../../components/layouts/page-wrapper/page-wrapper.module';

interface FileInfo {
  id: number;
  filename: string;
  content: string;
}
@Component({
  imports: [CommonModule, FormsModule, SharedLayoutsModule, PageWrapperModule],
  templateUrl: './create-gist.component.html',
  styleUrl: './create-gist.component.css',
})
export class CreateGistComponent {
  description = '';
  isLoading = false;
  error: string | null = '';
  files: FileInfo[] = [{ id: Date.now(), filename: '', content: '' }];

  constructor(private gistService: GistsService) {}

  addFile() {
    this.files.push({ id: Date.now(), filename: '', content: '' });
  }

  disableSubmit() {
    return (
      !this.description.trim() ||
      this.isLoading ||
      !this.files.some((file) => file.filename.trim() && file.content.trim())
    );
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  trackFileByIndex(index: number, file: FileInfo): number {
    return file.id;
  }

  createGist() {
    const formattedFiles: CreateFile = {};
    this.isLoading = true;

    this.files.forEach((file) => {
      if (file.filename.trim()) {
        formattedFiles[file.filename] = { content: file.content };
      }
    });

    const newGist: CreateGist = {
      description: this.description,
      public: true,
      files: formattedFiles,
    };

    this.gistService.createGist(newGist).subscribe({
      next: () => {
        this.isLoading = false;
        this.description = '';
        this.files = [{ id: Date.now(), filename: '', content: '' }];
        alert('Gist created Successfully');
      },
      error: () => {
        this.error = 'Failed to create gist. Please try again.';
        this.isLoading = false;
      },
    });
  }
}
