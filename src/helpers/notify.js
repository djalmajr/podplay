function notify(title, options) {
  const notif = new Notification(title.substr(0, 110), options);

  setTimeout(notif.close.bind(notif), 5000);
}

function notification(title, options) {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission === "granted") {
    notify(title, options);
    return;
  }

  Notification.requestPermission(function(permission) {
    if (permission === "granted") {
      notify(title, options);
    }
  });
}

export default notification;
