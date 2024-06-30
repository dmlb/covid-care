import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ICitation } from '../../interfaces/citations';

@Component({
  selector: 'app-citations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './citations.component.html',
  styleUrl: './citations.component.css'
})
export class CitationsComponent implements OnInit, OnDestroy {
  private sub$!: Subscription;
  citationData: ICitation[] = []; 
  title = 'Citations'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub$ = this.route.data.subscribe(data => {
      const citationData = data['citations'] as ICitation[] ?? []
      this.citationData = citationData.sort((a, b) => a.title.localeCompare(b.title));
    })
  }
  
  ngOnDestroy(): void {
    this.sub$?.unsubscribe()
  }
}
