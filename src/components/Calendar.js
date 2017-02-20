import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// Setup the localizer by providing the moment Object


const myEventsList =[];

class MyCalendar extends Component{
  constructor(){
    super()
    BigCalendar.momentLocalizer(moment);
    this.openEventModal = this.openEventModal.bind(this);
  }

  openEventModal(){
    this.props.openModal();
  }

  render(){
    return(
      <div className="c-calender">
        <BigCalendar
        events={myEventsList}
        startAccessor='startDate'
        endAccessor='endDate'
        views={['month']}
        selectable={true}
        onSelectSlot={this.openEventModal}
        />
      </div>
    );
  }

}
export default MyCalendar;
