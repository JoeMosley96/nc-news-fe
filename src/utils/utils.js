export function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

//  export function disableVoting(increment, button_index) {
//     const incrementedVoteCount = displayedVoteCount + increment;

//     setDisplayedVoteCount(incrementedVoteCount);

//     //set button states - user should not be able to incrmenet the vote count by more than one in either direction
//     let disabledButtonsLogicCopy = [...disabledButtonsLogic];
//     if (
//       (incrementedVoteCount - actualVoteCount < 0 && button_index === 1) ||
//       (incrementedVoteCount - actualVoteCount > 0 && button_index === 0)
//     ) {
//       disabledButtonsLogicCopy[button_index] = true;
//     } else {
//       disabledButtonsLogicCopy = [false, false];
//     }

//     setdisabledButtonsLogic(disabledButtonsLogicCopy);
//   }
