import React, { useState } from "react"
/* Third-Party */
import injectSheet from 'react-jss'
import cn from "classnames"
/* Child Components */
import WizardNavigation from "./navigation"
import WizardStep from "./step"

const styles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    "&:before": {
      content: '""',
      position: 'absolute',
      top: 72,
      left: 0,
      borderTop: '1px solid #dddddd',
      width: '100%',
      zIndex: 0
    }
  },
  body: {
    padding: {
      top: 50,
      right: 130,
      bottom: 0,
      left: 130
    }
  }
})

const Wizard = ({
  children,
  defaultStep = 1,
  classes
}) => {

  const [currentStep, setStep] = useState(defaultStep)

  /* Loops through the WizardStep children, creating a WizardNavigation for each one, then assigns props to the new navigation */
  const wizardNavigation = React.Children.map(children, ({ type, props }) => {
    if(type && type.displayName === 'Jss(WizardStep)') {
      return React.createElement(WizardNavigation, {
        onClick: () => setStep(props.step),
        currentStep: currentStep,
        step: props.step,
        title: props.title,
        icon: props.icon
      }, null);
    }

    return null
  });

  /* Loops through the WizardStep children, adding the currentStep to them */
  const wizardChildren = React.Children.map(children, child => {
    if(child.type && child.type.displayName === 'Jss(WizardStep)') {
      return React.cloneElement(child, {
        currentStep: currentStep
      });
    }

    return null
  });

  return (
    <div className={classes.wizard}>
      <div className={classes.header}>
        {wizardNavigation}
      </div>
      <div className={classes.body}>
        {wizardChildren}
      </div>
    </div>
  )
}

/* Validates that each child to Wizard is a WizardStep */
Wizard.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type !== WizardStep) {
        error = new Error(`${componentName} children should be of type 'WizardStep'`);
      }
    })
    return error
  }
}

export default injectSheet(styles)(Wizard)
