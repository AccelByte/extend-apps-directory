import { CloseOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Alert, Button, Modal, Typography } from 'antd'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ExternalLink } from './ExternalLink'
import styles from './ContributingGuideModal.module.css'

const { Title, Paragraph, Text } = Typography

// External link constants
const LINKS = {
  PUBLIC_FOLDER: 'https://github.com/AccelByte/extend-apps-directory/tree/main/public',
  JSON_DATA: 'https://github.com/AccelByte/extend-apps-directory/blob/main/app/data/extend-apps-directory.json',
  REPOSITORY: 'https://github.com/AccelByte/extend-apps-directory',
  VIDEO: 'https://www.youtube.com/watch?v=Y3YU5g6ri5I'
} as const

export function ContributingGuideModal() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showModal = searchParams.get('show-contributing-guide-modal') === 'true'

  useEffect(() => {
    // Track modal view with Google Analytics
    if (showModal && window.gtag) {
      window.gtag('event', 'view_contributing_guide', {
        event_category: 'engagement',
        event_label: 'Contributing Guide Modal Opened'
      })
    }
  }, [showModal])

  const handleClose = () => {
    searchParams.delete('show-contributing-guide-modal')
    setSearchParams(searchParams, { preventScrollReset: true })
  }

  if (!showModal) return null

  return (
    <Modal
      open
      className={styles.modal}
      styles={{ content: { padding: 0 } }}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={handleClose}
      closeIcon={null}
      width={640}
    >
      <div className={`d-flex align-items-center justify-content-between ${styles.modalHeader}`}>
        <Title level={4} className={styles.modalTitle}>
          Submit your app
        </Title>
        <Button style={{ width: 32, height: 32 }} onClick={handleClose}>
          <CloseOutlined />
        </Button>
      </div>
      <div className={styles.modalContent}>
        <div className="d-flex flex-column" style={{ gap: 24 }}>
          <div className="d-flex flex-column" style={{ gap: 8 }}>
            <Paragraph style={{ color: '#000000A6', marginBottom: 0 }}>
              Follow these steps to submit a Pull Request (PR) to our team for review and approval:
            </Paragraph>
            <ol className={styles.instructionsList}>
              <li>
                <Text strong>Go public:</Text> Ensure your repository (e.g., GitHub) is set to public.
              </li>
              <li>
                <Text strong>Add app icon:</Text> Upload your icon{' '}
                <a href={LINKS.PUBLIC_FOLDER} target="_blank" rel="noopener noreferrer">
                  <Text strong style={{ color: '#0b6cff' }}>
                    here
                  </Text>
                </a>
                . Recommended: 512x512px.
              </li>
              <li>
                <Text strong>Register app or suite:</Text> Add your app's details in <Text strong>extend-apps-directory.json</Text>{' '}
                <a href={LINKS.JSON_DATA} target="_blank" rel="noopener noreferrer">
                  <Text strong style={{ color: '#0b6cff' }}>
                    here
                  </Text>
                </a>
                .
                <ol type="a" style={{ marginTop: 0 }}>
                  <li>
                    <Text strong>App:</Text> A single app hosted in one repository.
                  </li>
                  <li>
                    <Text strong>Suite:</Text> A collection of multiple related apps (e.g., Gacha Suite).
                  </li>
                </ol>
              </li>
              <li>
                <Text strong>Submit PR:</Text> Open a Pull Request to this{' '}
                <a href={LINKS.REPOSITORY} target="_blank" rel="noopener noreferrer">
                  <Text strong style={{ color: '#0b6cff' }}>
                    repository
                  </Text>
                </a>
                , which our team will review.
              </li>
              <li>
                <Text strong>Go live:</Text> Once approved and merged, your app will automatically appear in the directory.
              </li>
            </ol>
          </div>
          <Alert
            type="info"
            icon={<VideoCameraFilled />}
            message={
              <div className="d-flex align-items-center justify-content-between" style={{ gap: 8 }}>
                <Text>Build your first Extend app in minutes using AI.</Text>
                <Button
                  type="primary"
                  size="small"
                  href={LINKS.VIDEO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch video <ExternalLink />
                </Button>
              </div>
            }
            showIcon
          />
        </div>
      </div>
    </Modal>
  )
}
