import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLikeNgIf]'
})
export class LikeNgIfDirective {

  constructor(private templateRef : TemplateRef<any>,
                private viewContainer: ViewContainerRef) { }
  @Input() set appLikeNgIf(condition:boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
     else{
       this.viewContainer.clear();
     }
  }

}
