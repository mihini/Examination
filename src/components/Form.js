import React, {Component} from 'react';
import exercises from '../data/exercises';

// const muscleList = {
//   abs:['Abs'],
//   legs:['Quads', 'Calves', 'Hamstring'],
//   arm:['Biceps', 'Triceps', 'Shoulder', 'Forearm'],
//   back:['Lats', 'Traps','Middle back', 'Lower back', 'Neck'],
//   hips:['Glutes', 'Adductors']
// }
const muscleList = [
  {abs:['Abs']},
  {legs:['Quads', 'Calves', 'Hamstring']},
  {arm:['Biceps', 'Triceps', 'Shoulder', 'Forearm']},
  {back:['Lats', 'Traps','Middle back', 'Lower back', 'Neck']},
  {hips:['Glutes', 'Adductors']}
]

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked:false
    };

    // this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.createChildCheckbox = this.createChildCheckbox.bind(this);
    this.createCheckboxes = this.createCheckboxes.bind(this);
    this.createParentCheckbox = this.createParentCheckbox.bind(this);
    // this.clickAllCheckbox = this.clickAllCheckbox.bind(this);
    // this.checkboxChange = this.checkboxChange.bind(this);
  }

  createChildCheckbox(label){
    // const {label}= this.props;
    // const {isChecked}= this.state;
    // console.log(label);
    return(
      <label key={label}>
        {label}
        <input
          type="checkbox"
          value='hej'
        />
      </label>
    )
  }

  createParentCheckbox(muscleGroup, obj){
    var underMuscles = obj[muscleGroup];
    var checkboxes= [];
    // console.log(underMuscles);
    underMuscles.forEach(muscles=>{
  //  console.log(muscles);
   checkboxes.push(this.createChildCheckbox(muscles));
 });

    return(
      <div key={muscleGroup}>
        <label>
          {muscleGroup}
          <input
            type="checkbox"
            value='ge'
          />
        </label>
        {checkboxes}
      </div>
    );
  }

  createCheckboxes(){
    var checkboxes=[];
    var muscleGroup;

    muscleList.forEach(obj=>{
      muscleGroup = Object.keys(obj).toString();// obj key name to string
      checkboxes.push(this.createParentCheckbox(muscleGroup, obj));// put checkboxes in array and return everything
    });
    // console.log(checkboxes);
    return checkboxes;
  }



  // clickAllCheckbox(e){
  //   if(e.target.checked){
  //     this.setState({
  //       checkboxIsChecked:true
  //     });
  //   }else{
  //     this.setState({
  //       checkboxIsChecked:false
  //     });
  //   }
  // }
  //
  // checkboxChange(e){
  //   console.log('ge');
  //   if(e.target.checked){
  //     console.log(e.target.checked);
  //     this.setState({
  //       checkboxIsChecked:true
  //     });
  //   }else{
  //     console.log("falsk");
  //     this.setState({
  //       checkboxIsChecked:false
  //     });
  //   }


  render(){
    return(
      <form className="c-form">
        {this.createCheckboxes()}
      </form>

    );
  }
}

export default Form;
