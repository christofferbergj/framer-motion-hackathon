import clsx from 'clsx'
import s from './PersonalInformation.module.css'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
}

const PersonalInformation: FunctionComponent<Props> = ({
  className,
}): JSX.Element => {
  const rootClassName = clsx(s.root, {}, className)

  return (
    <div className={rootClassName}>
      <h2>Personal information</h2>
    </div>
  )
}

export default PersonalInformation