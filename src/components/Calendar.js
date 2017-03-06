import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import exercises from '../data/exercises';

import moment from 'moment';
// Setup the localizer by providing the moment Object

function getSpecificExercise ( obj ) {
  return obj.muscle === 'shoulders';
}
var test = exercises.filter(getSpecificExercise);


var hej = test.map(function(el){
  return el.name;
});

// console.log(test);
// console.log(hej);

const myEventsList =[{
          'title': 'Leg',
          'allDay': true,
          'start': new Date("Feb 23 2017"),
          'end': new Date("Feb 23 2017")
        },
        {
          'title': 'Arm',
          'allDay': false,
          'start': new Date("Feb 23 2017"),
          'end': new Date("Feb 23 2017")
        }];

class MyCalendar extends Component{
  constructor(){
    super()
    BigCalendar.momentLocalizer(moment);

  }

  render(){
    const props = this.props;
    return(
      <div className="c-calendar">
        <BigCalendar
        events={myEventsList}
        views={['month']}
        selectable={true}
        onSelectSlot={props.openModal}
        />
      </div>
    );
  }

}
export default MyCalendar;
