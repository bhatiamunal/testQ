import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  status = 1
  totalQues = 0
  result=false
  Introduction = true

  Marks = {
    correct: 0,
    Incorrect: 0,
  }
  FormArray: any = {}
  
  TestForm
  TestFormUserDetails = new FormGroup(
    {
      Fname : new FormControl(''),
      Email : new FormControl(''),
      PNumber : new FormControl('')
      
    }
  )
  constructor() {
    this.totalQues = this.data.questions.length
    this.data.questions.forEach((ele: any) => {
      this.FormArray[ele.id] = new FormControl('')
    })

    this.TestForm = new FormGroup(this.FormArray)
  
  }
  Start(){
  this.TestFormUserDetails.value.Fname
    
    this.Introduction = false
  }
  ngOnInit(): void {
  }
  ChangeQues(next: any) {
    if (next) {
      this.status = this.status + 1
    }
    else {
      this.status = this.status - 1
    }

  }
  saveTestAns(status:any) {

    this.checkAns(status) 
    this.getResult()
  }
  getResult(){
      this.result = true;
      this.TestForm.reset()
  }
  AnsStatus: any;
  checkAns(status: any) {

    let data = this.data.questions.filter((data: any) => {
      return status == data.id
    })

    if (data[0].type == "single-select") {
      let ans = ""
      if (data[0].ans == "a" || data[0].ans == "A") {
        ans = data[0].options[0]
      }
      if (data[0].ans == "b" || data[0].ans == "B") {
        ans = data[0].options[1]
      }
      if (data[0].ans == "c" || data[0].ans == "C") {
        ans = data[0].options[2]
      }
      if (data[0].ans == "d" || data[0].ans == "D") {
        ans = data[0].options[3]
      }
      if (ans == this.FormArray[status].value) {
        this.Marks.correct = this.Marks.correct + 1
      }
      else {
        this.Marks.Incorrect = this.Marks.Incorrect + 1
      }

    }
    if (data[0].type == "multi-select") {
      let ans  = this.compareArrays(data[0].ans ,data[0].ans)
      if(ans){
        this.Marks.correct = this.Marks.correct + 1
      }
    }
  }
  // program to compare two arrays

 compareArrays(arr1:any, arr2:any) {

  // compare arrays
  const result = JSON.stringify(arr1) == JSON.stringify(arr2)

  // if result is true
  if(result) {
    return true
  }
  else {
      return false
  }

}
  data = {
    name: "Angular MCQ Ques",
    questions: [
      {
        "id": 1,
        "text": "Check Angular version?",
        "type": "single-select",
        "options": ["ng --version",
          "npm --version"],


        "ans": "a",
        "explanation": ""
      },
      {
        "id": 2,
        "text": "How does an Angular application work?",
        "type": "single-select",
        "options": ["Every Angular app consists of a file named angular.json",
          "Every Angular app consists of a file named node.json",
        ],
        "ans": "a",
        "explanation": ""
      },
      // {
      //   "id": 3,
      //   "text": ". What are some of the advantages of Angular over other frameworks?",
      //   "type": "multi-select",
      //   "options": [
      //     "Features that are provided out of the box",
      //     "Declarative UI",
      //     "Long-term Google support",
      //     "None of these",
      //   ],
      //   "ans": [1, 2,3],
      //   "explanation": ""
      // },
      {
        "id": 3,
        "text": "Not type of pipe",
        "type": "single-select",
        "options": ["pure Pipes",
          "impure pipes",
          "PercentsPipe"],

        "ans": "c",
        "explanation": ""
      },
      {
        "id": 4,
        "text": "In angular SPA stand for?",
        "type": "single-select",
        "options": ["SAP SE is a German multinational software company",
          "Single page applications"],

        "ans": "b",
        "explanation": ""
      },
      {
        "id": 5,
        "text": "What are templates in Angular?",
        "type": "single-select",
        "options": ["A templates  is a class in Angular that is declared with a @templates decorator.",
          "A template is a kind of HTML that instructs Angular about how to display a component"],
        "ans": "a",
        "explanation": ""
      },
      {
        "id": 6,
        "text": "When to use a directive?",
        "type": "single-select",
        "options": ["where multiple components need to have similar functionalities",
          "where we get instantiated only once during the lifetime of an application"],
        "ans": "a",
        "explanation": ""
      },
      {
        "id": 7,
        "text": "Not Types of decorators",
        "type": "single-select",
        "options": ["Method Decorator",
          "Class Decorator",
          "Parameter Decorator and Property Decorator",
          "None of these"],
        "ans": "d",
        "explanation": ""
      },
      // {
      //   "id": 7,
      //   "text": "Types of directives",
      //   "type": "multi-select",
      //   "options": ["Component directives",
      //     "Structural directives",
      //     "Attribute Directives",
      //     "custom directive"],
      //   "ans": [1,2,3,4],
      //   "explanation": ""
      // },
      {
        "id": 8,
        "text": "What is not true about Components?",
        "type": "single-select",
        "options": ["In Angular, components are the basic building blocks, which control a part of the UI for any application",
          "A component is defined using the @Component decorator.Every component consists of three parts, the template which loads the view for the component, a stylesheet which defines the look and feel for the component, and a class that contains the business logic for the component.",
          "For creating a component, inside the command terminal, navigate to the directory of the application created, and run the following command: ng generate component testOr ng g c test",
          "which get instantiated only once during the lifetime of an application"],
        "ans": "d",
        "explanation": ""
      },
      {
        "id": 9,
        "text": "Services are objects which get instantiated only once during the lifetime of an application. true or false",
        "type": "single-select",
        "options": ["TRUE",
          "FALSE"],
        "ans": "a",
        "explanation": ""
      },
      {
        "id": 10,
        "text": "To create a service, Which one of  the following command is used?",
        "type": "single-select",
        "options": ["ng g s test-service",
          "ng g c test-service",
          "npm g s test-service",
          "npm g service test-service"],
        "ans": "a",
        "explanation": ""
      },
      {
        "id": 11,
        "text": "Not part of Data binding in Angular?",
        "type": "single-select",
        "options": ["Property Binding",
          "Event Binding and String Interpolation",
          "Two way data binding",
          "None of these"],
        "ans": "d",
        "explanation": ""
      },
      
      
    ]
  }
  
}
