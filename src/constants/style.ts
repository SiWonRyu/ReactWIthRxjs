import CSS from 'csstype';


/**
 * TODO LIST WRAP
 */
export const kListWrap: CSS.Properties = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '2em 4em',
};


/**
 * TODO CONTENT WRAP
 */
export const kTodoContentWrap: CSS.Properties = {
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
};

/**
 * TODO
 */
export const kTodoContentTitle: CSS.Properties = {
  fontSize: '1.6rem'
};


/**
 * TODO ADD BUTTON, TODO DELETE BUTTON
 */
export const kButton: CSS.Properties = {
  fontSize: '0.9rem',
  borderRadius: '6px',
  padding: '0.4em 0.8em',
  marginRight: '0.8em'
};

export const kTodoInput: CSS.Properties = {
  fontSize: '0.9rem',
  padding: '0.4em',
  width: '400px',
  marginBottom: '10px',
};


/**
 * TODO ADD
 */
export const kDivider: CSS.Properties = {
  border: '0 3px 0 0 !important',
  borderImage: 'linear-gradient(to right, rgba(29,136,247,1) 0%, rgba(255,79,83,1) 100%)',
  borderImageSlice: '1 !important'
}

/**
 * TODO TOGGLE
 */
export const kToggleCheckBox: CSS.Properties = {
  zoom: '1.5',
  padding: '10px'
};

/**
 * TODO BUTTON WRAP
 */
export const kButtonWrap: CSS.Properties = {
  display: 'flex',
  alignItems: 'center',
};


/**
 * TODO ADD
 */
export const kInputFormWrap: CSS.Properties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '20px'
};