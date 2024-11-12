'use client'
import * as React from 'react'
import { Button, Image } from '@nextui-org/react'

import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react/dist/offline'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from '@/lib/schemas/loginForm'
import { signInAction } from '@/lib/actions'
export default function Page() {
  const { formState, register, reset, getValues } = useForm({
    resolver: yupResolver(loginFormSchema)
  })

  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <div className="flex bg-white h-full w-full flex-col items-center justify-center my-44">
      <div className="flex flex-col items-center pb-6">
        <Image
          src="/assets/images/RegenC_Logo.png"
          height={150}
          width="auto"
        />
        <p className="text-xl text-black font-medium">Welcome Back</p>
        <p className="text-small text-default-500">
          Log in to your account to continue
        </p>
      </div>
      <div className="mt-2 flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 py-6 shadow-small">
        <form
          className="flex flex-col gap-3"
          onSubmit={e => {
            e.preventDefault()
            fetch('/api/admin/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(getValues())
            })
              .then(response => response.json())
              .then(data => {
                if (data.error) {
                  toast.error(data.error)
                } else {
                  signInAction(data.email, data.password)
                  toast.success('Welcome to Admin Dashboard!')
                }
              })
              .catch(error => {
                toast.error(error.message)
              })
              .finally(() => reset())
          }}
        >
          <input
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            required
            {...register('email', {
              validate: value => value !== ''
            })}
            className="text-black w-full p-2 mb-2 rounded-lg ring-2 ring-gray-900/5 shadow-sm border-0 focus:ring-2 focus:ring-blue-600 bg-gray-50/30 hover:bg-gray-50/70 transition-all duration-300 placeholder:text-gray-400"
          />
          <input
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            required
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? 'text' : 'password'}
            variant="bordered"
            {...register('password')}
            className="text-black w-full p-2 rounded-lg ring-2 ring-gray-900/5 shadow-sm border-0 focus:ring-2 focus:ring-blue-600 bg-gray-50/30 hover:bg-gray-50/70 transition-all duration-300 placeholder:text-gray-400"
          />
          <p>{formState.errors.password}</p>
          <Button color="primary" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  )
}
