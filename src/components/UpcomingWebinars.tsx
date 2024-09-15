'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

const UpcomingWebinars = () => {
    const musicCourses = [
        {
          title: "Beginner Piano Lessons",
          description: "A comprehensive course for beginners to learn the basics of piano, including scales, chords, and simple songs.",
          slug: "beginner-piano-lessons",
          isFeatured: true
        },
        {
          title: "Advanced Guitar Techniques",
          description: "This course covers advanced guitar techniques such as fingerpicking, solo improvisation, and music theory.",
          slug: "advanced-guitar-techniques",
          isFeatured: false
        },
        {
          title: "Vocal Training for Beginners",
          description: "Learn the fundamentals of singing, including breath control, pitch, and vocal exercises, designed for newcomers.",
          slug: "vocal-training-for-beginners",
          isFeatured: true
        },
        {
          title: "Intermediate Violin Mastery",
          description: "Build on your existing violin skills with intermediate techniques and repertoire in this challenging course.",
          slug: "intermediate-violin-mastery",
          isFeatured: false
        },
        {
          title: "Drum Beats and Rhythms",
          description: "Master various drum beats and rhythms in this beginner-friendly course designed for aspiring drummers.",
          slug: "drum-beats-and-rhythms",
          isFeatured: false
        },
        {
          title: "Jazz Saxophone Improvisation",
          description: "Explore jazz improvisation techniques on the saxophone and learn how to create captivating solos.",
          slug: "jazz-saxophone-improvisation",
          isFeatured: true
        },
        {
          title: "Introduction to Music Theory",
          description: "A must-take course for anyone wanting to understand the foundations of music theory and composition.",
          slug: "introduction-to-music-theory",
          isFeatured: true
        },
        {
          title: "Electronic Music Production",
          description: "Learn how to create your own electronic music using digital audio workstations and production software.",
          slug: "electronic-music-production",
          isFeatured: false
        },
        {
          title: "Classical Guitar for Beginners",
          description: "A step-by-step guide to learning classical guitar, from basic chords to reading sheet music.",
          slug: "classical-guitar-for-beginners",
          isFeatured: false
        },
        {
          title: "Music Composition and Arrangement",
          description: "This course teaches you how to compose your own music and arrange pieces for different instruments.",
          slug: "music-composition-and-arrangement",
          isFeatured: true
        },
        {
          title: "Rock and Roll Drumming",
          description: "Dive into the world of rock drumming and learn the essential beats and fills used by top rock drummers.",
          slug: "rock-and-roll-drumming",
          isFeatured: false
        },
        {
          title: "Choir and Group Singing",
          description: "Improve your vocal technique in a group setting while learning harmonization and choir dynamics.",
          slug: "choir-and-group-singing",
          isFeatured: true
        },
        {
          title: "Pop Piano for Intermediate Players",
          description: "A course for intermediate pianists looking to learn popular songs and improve their chord progressions.",
          slug: "pop-piano-for-intermediate-players",
          isFeatured: false
        },
        {
          title: "Music Production with Ableton Live",
          description: "An in-depth course on producing professional-level tracks using Ableton Live, for both beginners and intermediates.",
          slug: "music-production-with-ableton-live",
          isFeatured: true
        }
      ];
      

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='uppercase text-teal-600 font-semibold tracking-wide'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            
            <div className='mt-10'>
                <HoverEffect 
                    items={musicCourses.map(item => (
                        {
                            title: item?.title, 
                            description: item?.description, 
                            link: `/webinars/${item?.slug}`
                        }
                    ))}
                />
            </div>

            <div className='text-center mt-10'>
                <Link href={'/'}  className='px-4 py-2 rounded border border-neutral-600 text-neutral-700  bg-white hover-bg-gray-100 transition duration-200 shadow-md hover:shadow-teal-300'>
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars