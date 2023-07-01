import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import Skill from '../components/Skill'
import useLanguage from '../context/LanguageContext'

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

import { useState } from 'react'

const skill = [
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
      name: 'Express.JS',
      img: express,
    },
  ],
  [
    {
      name: 'MongoDB',
      img: mongo,
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

const [languageList, framework, databases, tools] = skill

export default function SkillSection() {
  const { language } = useLanguage()
  const [count, setCount] = useState(1)

  // ==== Language
  const id = language?.header?.navbar[3]?.name
  const title = language?.skills?.title
  const description = language?.skills?.description
  const tab = language?.skills?.tab

  return (
    <Section id={id}>
      <HeaderSection title={title} description={description} />
      <div className='overflow-hidden overflow-x-scroll'>
        <ul className='flex text-center w-[38rem] sm:w-auto'>
          {tab.map((item, i) => {
            return (
              <li
                onClick={() => setCount(i + 1)}
                key={item}
                className={`${
                  count == i + 1 &&
                  'border-b-2 border-b-blue-600 text-blue-600 hover:text-blue-600 hover:border-blue-600'
                } flex-1 cursor-pointer border-b py-4 font-semibold duration-0 hover:text-blue-500 hover:border-blue-500`}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      {count == 1 && <Skill list={languageList} />}
      {count == 2 && <Skill list={framework} />}
      {count == 3 && <Skill list={databases} />}
      {count == 4 && <Skill list={tools} />}
    </Section>
  )
}
