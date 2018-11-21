import React from 'react';

const ContestPreview = (contest) => (
  <div className='ContestPreview'>
    <div className='ContestPreview'>
      <div className='category-name'>
        {contest.categoryName}
      </div>
      <div className='contest-name'>
        {contest.contestName}
      </div>
    </div>
  </div>
);

export default ContestPreview;