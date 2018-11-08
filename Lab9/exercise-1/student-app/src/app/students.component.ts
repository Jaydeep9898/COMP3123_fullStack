import {Component} from '@angular/core';
@Component({
    selector: 'students',
    template: '<h2>{{getTitle()}}</h2><h2>{{getDate()}}</h2>'
})
export class StudentsComponent{

    title = "My list of Students";

    getTitle(){
        return this.title;
    }

    getDate(){
        // var date = Date.now.toString();
        // return ${date};
    }

}