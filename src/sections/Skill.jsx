import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import Skill from '../components/Skill'

import html from '../../src/assets/skills/html.svg'
import css from '../../src/assets/skills/css.svg'
import js from '../../src/assets/skills/js.svg'
import react from '../../src/assets/skills/react.svg'
import tailwind from '../../src/assets/skills/tailwind.svg'
import vite from '../../src/assets/skills/vite.svg'
import node from '../../src/assets/skills/nodejs.png'
import express from '../../src/assets/skills/express.svg'
import mongo from '../../src/assets/skills/mongo.svg'
import linux from '../../src/assets/skills/linux.svg'
import git from '../../src/assets/skills/git.svg'
import vscode from '../../src/assets/skills/vscode.svg'
import postman from '../../src/assets/skills/postman.png'
import npm from '../../src/assets/skills/npm.svg'
import ts from '../../src/assets/skills/typescript.svg'
import electron from '../../src/assets/skills/electron.svg'
import socket from '../../src/assets/skills/socket.svg'
import mysql from '../../src/assets/skills/mysql.png'

import { useState } from 'react'

export default function SkillSection() {
  const [count, setCount] = useState(1)

  const skills = [
    [
      {
        name: 'HTML',
        img: html,
      },
      {
        name: 'CSS',
        img: css,
      },
      {
        name: 'JavaScript',
        img: js,
      },
      {
        name: 'TypeScript',
        img: ts,
      },
    ],
    [
      {
        name: 'React.JS',
        img: react,
      },
      {
        name: 'Tailwind.CSS',
        img: tailwind,
      },
      {
        name: 'Node.JS',
        img: node,
      },
      {
        name: 'Socket.IO',
        img: socket,
      },
      {
        name: 'React Native',
        img: react,
      },
      {
        name: 'Electron.JS',
        img: electron,
      },
      {
        name: 'Express.JS',
        img: express,
      },
    ],
    [
      {
        name: 'MongoDB',
        img: mongo,
      },
      {
        name: 'MySQL (ORM)',
        img: mysql,
      },
    ],
    [
      {
        name: 'Linux',
        img: linux,
      },
      {
        name: 'GIT',
        img: git,
      },
      {
        name: 'Vite',
        img: vite,
      },
      {
        name: 'VS Code',
        img: vscode,
      },
      {
        name: 'Postman',
        img: postman,
      },
      {
        name: 'NPM',
        img: npm,
      },
    ],
  ]
  const [languageList, framework, databases, tools] = skills
  const tabs = ['Bahasa', 'Kerangka/Pusataka', 'Database', 'Alat']

  return (
    <Section id='kemampuan'>
      <HeaderSection title='kemampuan' description='Semua kemampuan saya sejauh ini' />
      <div className='overflow-hidden overflow-x-scroll'>
        <ul className='flex text-center w-[38rem] sm:w-auto'>
          {tabs.map((item, i) => {
            return (
              <li
                onClick={() => setCount(i + 1)}
                key={item}
                className={`${
                  count === i + 1 &&
                  'border-b-2 border-b-blue-600 text-blue-600 hover:text-blue-600 hover:border-blue-600'
                } flex-1 cursor-pointer border-b py-4 font-semibold duration-0 hover:text-blue-500 hover:border-blue-500`}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      {count === 1 && <Skill list={languageList} />}
      {count === 2 && <Skill list={framework} />}
      {count === 3 && <Skill list={databases} />}
      {count === 4 && <Skill list={tools} />}
    </Section>
  )
}
