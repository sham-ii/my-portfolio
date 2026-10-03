/**
 * Profile photo resolver.
 *
 * Drop your photo into src/assets/images/ as profile.jpg (or .jpeg/.png/.webp)
 * and it is used automatically. Until then the neutral placeholder is shown.
 */
import placeholder from '../assets/images/profile-placeholder.svg'

const photos = import.meta.glob('../assets/images/profile.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const userPhoto = Object.values(photos)[0]

export const profileImage = userPhoto ?? placeholder
export const hasCustomProfileImage = Boolean(userPhoto)
