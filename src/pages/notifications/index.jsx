import { useState } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";
import Switcher from "../../components/Switcher";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 0,
      name: "updates",
      label: "Updates & News",
      isChecked: true,
    },
    {
      id: 1,
      name: "new-course",
      label: "New course",
      isChecked: true,
    },
    {
      id: 2,
      name: "new-parsha",
      label: "New Parsha Lecture",
      isChecked: false,
    },
    {
      id: 3,
      name: "customer-survey",
      label: "Invitation to take customer survey",
      isChecked: true,
    },
    {
      id: 4,
      name: "rate-request",
      label: "Request to rate and review courses you have taken",
      isChecked: false,
    },
    {
      id: 5,
      name: "in-progress-reminders",
      label: "Reminders about your in-progress courses",
      isChecked: false,
    },
    {
      id: 6,
      name: "liked",
      label: "Someone liked your comment, rating or comment",
      isChecked: true,
    },
    {
      id: 7,
      name: "top-trending",
      label: "Top trending courses and Parsha lectures",
      isChecked: false,
    },
  ]);
  const [notificationsToggle, setNotificationsToggle] = useState(true);

  const handleSwitchChange = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          isChecked: !notification.isChecked,
        };
      }
      return notification;
    });

    setNotifications(updatedNotifications);
  };

  const turnOffNotifications = () => {
    const anyChecked = notifications.some(
      (notification) => notification.isChecked
    );

    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isChecked: !anyChecked,
    }));

    setNotifications(updatedNotifications);
    setNotificationsToggle(!notificationsToggle);
  };

  return (
    <>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        Notifications
      </Typography>

      <Box
        position="relative"
        bgcolor="#fff"
        borderRadius="20px"
        p={pxToRem(60)}
      >
        <BlockHeading>
          <Typography component="h3" variant="blockTitle" mb={pxToRem(5)}>
            General Notifications
          </Typography>
          <Typography component="p" variant="medium">
            Sed ut perspiciatis unde omnis iste natus accusantium.
          </Typography>
        </BlockHeading>

        <Stack
          gap={pxToRem(20)}
          sx={{
            "& label .MuiTypography-root": {
              fontSize: pxToRem(18),
              fontWeight: 600,
              color: "#333",
            },
          }}
        >
          {notifications.map((n) => (
            <Switcher
              key={n.id}
              name={n.name}
              label={n.label}
              checked={n.isChecked}
              onChange={() => handleSwitchChange(n.id)}
            />
          ))}
        </Stack>

        <Divider
          sx={{ my: pxToRem(30), borderColor: "rgba(191,190,187, 0.5)" }}
        />

        <Button variant="yellow" size="small" onClick={turnOffNotifications}>
          Turn All {notificationsToggle ? "Off" : "On"}
        </Button>
      </Box>
    </>
  );
};

export default Notifications;
