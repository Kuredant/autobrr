/*
 * Copyright (c) 2021 - 2023, Ludvig Lundgren and the autobrr contributors.
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

interface NavItem {
  name: string;
  path: string;
}

export interface RightNavProps {
  logoutMutation: () => void;
}

export const NAV_ROUTES: Array<NavItem> = [
  { name: "Dashboard", path: "/" },
  { name: "Filters", path: "/filters" },
  { name: "Releases", path: "/releases" },
  { name: "Settings", path: "/settings" },
  { name: "Logs", path: "/logs" }
];
