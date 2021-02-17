import { Button, Container } from '@components/ui'
import { setStep, useSdFlow } from '@features/sdFlow/sdFlowSlice'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { BecomeMember, BecomeMemberNav } from '@features/sdFlow/BecomeMember'
import {
  ChildrenInformation,
  ChildrenInformationNav,
} from '@features/sdFlow/ChildrenInformation'
import { Layout } from '@components/common'
import {
  PersonalInformation,
  PersonalInformationNav,
} from '@features/sdFlow/PersonalInformation'
import { useAppDispatch } from '@app/store'

export default function SdFlow(): JSX.Element {
  const dispatch = useAppDispatch()
  const { activeStep } = useSdFlow()

  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        {activeStep === 'become_member' && <BecomeMember key="become_member" />}

        {activeStep === 'personal_information' && (
          <PersonalInformation key="personal_information" />
        )}

        {activeStep === 'children_information' && (
          <ChildrenInformation key="children_information" />
        )}
      </AnimatePresence>

      <AnimateSharedLayout type="crossfade">
        {activeStep === 'become_member' && (
          <BecomeMemberNav key="become_member" />
        )}

        {activeStep === 'personal_information' && (
          <PersonalInformationNav key="personal_information" />
        )}

        {activeStep === 'children_information' && (
          <ChildrenInformationNav key="children_information" />
        )}
      </AnimateSharedLayout>

      <div className="mt-40 space-x-4">
        <Button onClick={() => dispatch(setStep('become_member'))} size="sm">
          Bliv medlem
        </Button>

        <Button
          onClick={() => dispatch(setStep('personal_information'))}
          size="sm"
        >
          Personlig information
        </Button>

        <Button
          onClick={() => dispatch(setStep('children_information'))}
          size="sm"
        >
          Børn
        </Button>
      </div>
    </Container>
  )
}

SdFlow.Layout = Layout
