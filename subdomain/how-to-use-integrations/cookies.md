---
sidebar_position: 1
---

# 'Cookies'

You can actually use 'cookies' (data stored in-memory) to integrate your game with Lantech Settings. If the user has previously downloaded your game, they can access your 'settings' in the 'in app integrations' in the Settings panel.

:::caution

To use this feature, you must use the 'Local Storage' extension on Turbowarp or Penguinmod, which you can access [here](https://extensions.turbowarp.org/local-storage.js)

:::

First, you should set the project namespace to `lantech:games`. This will allow your game to use the same place to store data, therefore it will be accessible in the launcher too. You should also put this under a `when green flag clicked` block.


![Locale Dropdown](./img/1.svg)

Now you can set your keys.


![Locale Dropdown](./img/3.svg)

:::caution

Lantech only supports custom integrations as checkboxes, so your data should be stored as a `1` or a `0` otherwise it won't work.

:::

You can get the value of keys using the following:


![Locale Dropdown](./img/2.svg)

You also shouldn't check for key values in a forever loop - it may work, but it puts a lot of pressure on the device's RAM, and it's really inefficient and may break if multiple loops are used at the same time.

### Don't do this:

![Locale Dropdown](./img/4.svg)


### Do this instead:

![Locale Dropdown](./img/5.svg)