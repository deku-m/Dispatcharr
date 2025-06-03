import { useEffect } from 'react';
import API from '../api';
import { showUpdateNotification } from '../utils/updateNotification';

export default function UpdateNotification() {
  useEffect(() => {
    const check = async () => {
      try {
        const data = await API.getVersion();
        if (data?.update_version && data.update_version !== data.version) {
          showUpdateNotification(data.update_version, data.update_url);
        }
      } catch (e) {
        console.error('Failed to fetch update info:', e);
      }
    };
    check();
  }, []);
  return null;
}
