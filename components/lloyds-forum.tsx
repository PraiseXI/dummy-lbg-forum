'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

// Define types for comments, posts, and sentiments
interface CommentType {
  id: number
  author: string
  avatar: string
  content: string
  replies?: CommentType[]
}

interface PostType {
  id: number
  author: string
  avatar: string
  title: string
  content: string
  sentiment: 'positive' | 'neutral' | 'negative' | 'ridiculous'
  comments: CommentType[]
}

// Ensure forumData is typed correctly as PostType[]
const forumData: PostType[] = [
  {
    id: 1,
    author: "HappyCustomer123",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Great experience at Lloyds Manchester branch!",
    content: "I visited the Lloyds branch in Manchester city center yesterday, and I was blown away by the excellent service. The staff was friendly and helped me set up my new account in no time!",
    sentiment: "positive",
    comments: [
      {
        id: 101,
        author: "LocalResident",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I agree! The Manchester branch is always top-notch.",
        replies: [
          {
            id: 1001,
            author: "NewInTown",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "That's great to hear! I'm new to the area and was considering switching to Lloyds."
          },
          {
            id: 1002,
            author: "SkepticalUser",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "My experience wasn’t that good last time. Maybe I should give them another shot?"
          }
        ]
      },
      {
        id: 102,
        author: "FrequentCustomer",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I agree! They helped me with my mortgage application, and the process was seamless.",
        replies: []
      }
    ]
  },
  {
    id: 2,
    author: "TechSavvyUser",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Lloyds mobile app needs improvement",
    content: "While I appreciate the convenience of mobile banking, I find the Lloyds app to be a bit clunky. It often lags when I'm trying to make transfers, and the UI could use a refresh.",
    sentiment: "neutral",
    comments: [
      {
        id: 201,
        author: "AppDeveloper",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "As someone who works in app development, I can see room for improvement. Have you tried the latest update?",
        replies: [
          {
            id: 2001,
            author: "TechSavvyUser",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Yes, still facing issues though."
          }
        ]
      },
      {
        id: 202,
        author: "LloydsSupportRep",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "We're sorry to hear about your experience with our app. We're constantly working on improvements. Could you provide more specific feedback to help us enhance the user experience?",
        replies: []
      },
      {
        id: 203,
        author: "CasualUser",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I haven’t noticed too many issues, but I mostly just check my balance and make small transfers.",
        replies: []
      }
    ]
  },
  {
    id: 3,
    author: "FrustratedSaver",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Disappointed with Lloyds savings rates",
    content: "I've been a Lloyds customer for years, but I'm really disappointed with their current savings account interest rates. They're well below the market average. Considering switching banks if this doesn't improve soon.",
    sentiment: "negative",
    comments: [
      {
        id: 301,
        author: "FinancialAdvisor",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "While I understand your frustration, it's worth noting that interest rates are low across the board right now. Have you considered Lloyds' fixed-term savings accounts?",
        replies: [
          {
            id: 3001,
            author: "FrustratedSaver",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Thanks for the suggestion. I'll look into it, but I still feel Lloyds could do better for loyal customers."
          }
        ]
      },
      {
        id: 302,
        author: "ConcernedInvestor",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I'm in the same boat. Feels like loyalty isn't rewarded anymore.",
        replies: [
          {
            id: 3002,
            author: "OptimisticSaver",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Hang in there! The economy is tough for all banks. Hopefully, things improve soon."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    author: "ConspiracyTheorist",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Lloyds Bank is secretly run by lizard people!",
    content: "I've done my research, and I'm convinced that Lloyds Bank is actually controlled by a secret society of lizard people. They're using our money to build underground cities! Wake up, sheeple!",
    sentiment: "ridiculous",
    comments: [
      {
        id: 401,
        author: "RationalThinker",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I think you've been watching too many sci-fi movies. Lloyds is just a regular bank with regular human employees.",
        replies: [
          {
            id: 4001,
            author: "ConspiracyTheorist",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "That's exactly what a lizard person would say! I'm onto you!"
          },
          {
            id: 4002,
            author: "SkepticalUser",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "I need to see some more evidence before I can believe that!"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    author: "BusyMom2023",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Mixed feelings about customer service",
    content: "The staff were friendly, but the waiting times were way too long. I had my kids with me and it was a nightmare. Can you guys speed up the process a little?",
    sentiment: "neutral",
    comments: [
      {
        id: 501,
        author: "CustomerSupportRep",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "We’re sorry to hear that! We'll work on improving our service. Have you tried booking an appointment next time to avoid the wait?",
        replies: []
      },
      {
        id: 502,
        author: "TiredParent",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I know what you mean! Kids and long queues do not mix well.",
        replies: [
          {
            id: 5001,
            author: "BusyMom2023",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Exactly! It was a nightmare keeping them entertained while waiting."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    author: "InvestorTom",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Lloyds investment services are top-notch",
    content: "I've been investing through Lloyds for over a decade, and their investment team has always been excellent. Great advice and strong returns!",
    sentiment: "positive",
    comments: [
      {
        id: 601,
        author: "NewInvestor",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "Good to know! I’ve been thinking of starting with their investment platform. Any tips?",
        replies: [
          {
            id: 6001,
            author: "InvestorTom",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Start small and diversify your portfolio. Lloyds has good beginner-friendly options."
          }
        ]
      },
      {
        id: 602,
        author: "RiskAverse",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "How do you feel about market volatility right now? Are you considering pulling out?",
        replies: [
          {
            id: 6002,
            author: "InvestorTom",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "I’m in for the long haul, so I try not to worry too much about short-term market fluctuations."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    author: "FrugalGuy",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Lloyds charges too many fees!",
    content: "Why does Lloyds charge so many fees for everything? I'm being charged left and right for things that other banks offer for free.",
    sentiment: "negative",
    comments: [
      {
        id: 701,
        author: "MoneySaver",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I feel the same! I’m looking into switching to a bank with fewer fees.",
        replies: [
          {
            id: 7001,
            author: "FrugalGuy",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Exactly, it’s ridiculous. Let me know if you find a better option!"
          }
        ]
      },
      {
        id: 702,
        author: "FinanciallyConscious",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "Lloyds does charge more than some other banks. Have you tried negotiating the fees or switching to a different type of account?",
        replies: [
          {
            id: 7002,
            author: "FrugalGuy",
            avatar: "/placeholder.svg?height=25&width=25",
            content: "Not yet. I might give them a call to discuss my options."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    author: "EarlyRiser",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Great service at 8 AM!",
    content: "Went to my local branch as soon as it opened and had a great experience. Fast, efficient, and friendly staff.",
    sentiment: "positive",
    comments: [
      {
        id: 801,
        author: "MorningPerson",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "That’s the best time to go! No queues early in the morning.",
        replies: []
      },
      {
        id: 802,
        author: "NightOwl",
        avatar: "/placeholder.svg?height=30&width=30",
        content: "I wish they had late hours! I’m not much of a morning person.",
        replies: []
      }
    ]
  }
]

const SentimentBadge = ({ sentiment }: { sentiment: 'positive' | 'neutral' | 'negative' | 'ridiculous' }) => {
  const colors: { [key in 'positive' | 'neutral' | 'negative' | 'ridiculous']: string } = {
    positive: "bg-green-100 text-green-800",
    neutral: "bg-yellow-100 text-yellow-800",
    negative: "bg-red-100 text-red-800",
    ridiculous: "bg-purple-100 text-purple-800"
  }
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[sentiment]}`}>
      {sentiment}
    </span>
  )
}

const Comment = ({ comment, isReply = false }: { comment: CommentType, isReply?: boolean }) => (
  <div className={`mt-4 ${isReply ? 'ml-6' : ''}`}>
    <div className="flex items-start space-x-3">
      <Avatar className="w-6 h-6">
        <AvatarImage src={comment.avatar} alt={comment.author} />
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">{comment.author}</p>
        <p className="text-sm text-gray-500">{comment.content}</p>
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} isReply={true} />
        ))}
      </div>
    </div>
  </div>
)

const ForumPost = ({ post }: { post: PostType }) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{post.title}</CardTitle>
            <p className="text-sm text-gray-500">by {post.author}</p>
          </div>
        </div>
        <SentimentBadge sentiment={post.sentiment} />
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">Comments</h3>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </CardContent>
  </Card>
)

export function LloydsForum() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lloyds Banking Forum</h1>
      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        {forumData.map(post => (
          <ForumPost key={post.id} post={post} />
        ))}
      </ScrollArea>
    </div>
  )
}