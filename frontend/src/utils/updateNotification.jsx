import { notifications } from '@mantine/notifications';
import { Stack, Button, Group } from '@mantine/core';

const STORAGE_KEY = 'dismissedUpdateVersion';

export function showUpdateNotification(version, url) {
  if (!version || localStorage.getItem(STORAGE_KEY) === version) {
    return;
  }

  notifications.show({
    id: 'update-available',
    title: 'Update Available',
    message: (
      <Stack gap={4}>
        <span>{`Dispatcharr ${version} is available`}</span>
        <Group grow>
          <Button size="xs" variant="default" onClick={() => window.open(url, '_blank')}>
            View Release
          </Button>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, version);
              notifications.hide('update-available');
            }}
          >
            Don't show again
          </Button>
        </Group>
      </Stack>
    ),
    color: 'blue.5',
    autoClose: false,
  });
}
