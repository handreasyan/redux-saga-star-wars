import React from 'react';

const LIMIT = 10;

const PeopleTablePagination = ({page, total, onChange}) => {
  const totalPages = Math.ceil(total / LIMIT)

  return (
    <div className='pagination'>
      {Array.from({length: totalPages}, (_, i) => i + 1).map(pageIndex => {
        const isActive = pageIndex === page
        const action = () => {
          if (!isActive) {
            onChange(pageIndex)
          }
        }

        return (
          <span
            key={pageIndex}
            onClick={action}
            style={isActive ? {color: 'red'} : {}}
          >
              {pageIndex}
          </span>
        )
      })}
    </div>
  );
};

export default PeopleTablePagination;