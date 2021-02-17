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
import { SideInfo } from '@features/sdFlow/SideInfo'
import clsx from 'clsx'

export default function SdFlow(): JSX.Element {
  const dispatch = useAppDispatch()
  const { activeStep } = useSdFlow()

  return (
    <div className="relative flex h-screen">
      <SideInfo />

      <Container>
        <div
          className={clsx({
            'pl-96 2xl:pl-0': activeStep !== 'become_member',
          })}
        >
          <AnimateSharedLayout type="crossfade">
            {activeStep === 'become_member' && (
              <>
                <BecomeMember />
                <BecomeMemberNav key="become_member" />
              </>
            )}

            {activeStep === 'personal_information' && (
              <>
                <PersonalInformation />
                <PersonalInformationNav key="personal_information" />
              </>
            )}

            {activeStep === 'children_information' && (
              <>
                <ChildrenInformation />
                <ChildrenInformationNav key="children_information" />
              </>
            )}
          </AnimateSharedLayout>
        </div>
      </Container>
    </div>
  )
}

SdFlow.Layout = Layout
