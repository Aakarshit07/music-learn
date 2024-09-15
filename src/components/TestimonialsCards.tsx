'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function MusciSchoolTestimonials() {
    const testimonials = [
        {
            quote: "The lessons here have completely transformed my understanding of music theory. I feel more confident than ever!",
            name: "Sarah Johnson",
            title: "Piano Student"
        },
        {
            quote: "Thanks to the amazing instructors, I was able to pick up the guitar much faster than I expected. Highly recommend!",
            name: "Michael Lee",
            title: "Guitar Student"
        },
        {
            quote: "The vocal training classes are top-notch. I’ve seen a dramatic improvement in my singing range and technique.",
            name: "Emily Davis",
            title: "Vocal Student"
        },
        {
            quote: "Learning the drums here has been such a fun and rewarding experience. The teachers are super patient and knowledgeable.",
            name: "James Thompson",
            title: "Drum Student"
        },
        {
            quote: "As a beginner, I was nervous about starting violin lessons, but the support and encouragement I received made all the difference.",
            name: "Anna Garcia",
            title: "Violin Student"
        },
        {
            quote: "The music school offers a great balance between theory and practical lessons. I've improved my performance skills significantly.",
            name: "David Wilson",
            title: "Saxophone Student"
        }
    ];
      
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2>Hear of Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default MusciSchoolTestimonials;


