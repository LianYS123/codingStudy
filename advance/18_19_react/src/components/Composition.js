import React from 'react'

function Dialog(props) {
  return (
    <div>{props.children}</div>
  )
}

function FilterP(Compo) {
  return function ({
    children,
    ...props
  }) {
    return (
      <div>
        <Compo {...props}>
          {React
            .Children
            .map(children, child => {
              if (child.type !== 'p') {
                return;
              } else {
                return child;
              }
            })}
        </Compo>
      </div>
    )
  }
}

export default FilterP(Dialog);
