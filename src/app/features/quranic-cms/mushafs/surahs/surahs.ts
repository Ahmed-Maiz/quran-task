import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { QuranDataService } from '../../services/quran-data.service';

@Component({
  selector: 'app-surahs',
  imports: [NzTableModule, NzTagModule],
  templateUrl: './surahs.html',
  styleUrl: './surahs.less',
})
export class Surahs implements OnInit {
  private _quranService = inject(QuranDataService);

  surahs = toSignal(this._quranService.getSurahs(), { initialValue: [] });

  ngOnInit(): void {
    console.log(this.surahs());
  }
}
