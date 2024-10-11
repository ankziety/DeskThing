import React from 'react'
import Nav from './Nav'
import { useClientStore } from '@renderer/stores'
import { IconConnected, IconConnecting, IconLogo } from '@renderer/assets/icons'

const TopBar: React.FC = () => {
  const connections = useClientStore((clientStore) => clientStore.connections)
  const version = process.env.PACKAGE_VERSION
  return (
    <div className="bg-black border-slate-800 border-b text-white flex items-center justify-between">
      <div className="flex items-center p-4 min-w-24 md:min-w-48">
        {connections == 0 ? (
          <IconConnecting className="text-white pt-1" iconSize={24} />
        ) : (
          <div className="text-green-500 flex">
            <p className="text-xs">{connections == 1 ? '' : connections}</p>
            <IconConnected className=" pt-1" iconSize={24} />
          </div>
        )}
        <IconLogo width={110} height={30} iconSize={50} className={'hidden md:inline'} />
        <p className="text-sm hidden md:inline">v{version}</p>
      </div>
      <div className="w-full">
        <Nav />
      </div>
    </div>
  )
}

export default TopBar
