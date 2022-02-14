import { notification } from 'antd';

const openNotificationWithIcon = (type: string, content: string) => {
 return notification[type]({
    message: content,
  });
};
export const notifySuccess = (content: string) => {
  if(content) openNotificationWithIcon('success', content);
};
export const notifyError = (content: string) => {
  if(content) openNotificationWithIcon('error', content);
};
