import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Users, Share2, Bell, MessageSquare, Layout, CheckCircle, Undo, Redo, Bold, Italic, Strikethrough, List, AlignLeft, AlignCenter, AlignRight, AlignJustify, Trash2 , Menu , X} from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


// export function ResponsiveDocument() {
//   const [commentsOpen, setCommentsOpen] = useState(false)
// }

function App() {

  const [commentsOpen, setCommentsOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="ml-5 flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="font-bold text-xl">LiveDocs</span>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a href="https://live-docs-main-eight.vercel.app">
            <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
            </a>
            
            <a href="https://live-docs-main-eight.vercel.app">
            <Button>Get Started</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-background pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-zinc-900 dark:text-white">Live</span>
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">Docs</span>
            </h1>
            <p className="font-bold mt-6 text-xl text-muted-foreground">  
             <a className='text-blue-600 dark:text-sky-500'> Real-time </a> collaborative document editing for modern teams
            </p>
            <div className="mt-8 flex justify-center gap-4">

            <a href="https://live-docs-main-eight.vercel.app">
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                Get Started
              </Button>
            </a>

              <a href="#features">
              <Button size="lg" variant="outline" className="border-zinc-200 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800">
                Learn More
              </Button>
              </a>

            </div>
          </div>
        </div>
      </header>

      {/* Document Interface Preview */}
      <section className="py-8 md:py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-xl border bg-card shadow-lg">
          {/* Header */}
          <div className="border-b p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="font-medium text-sm sm:text-base">Docs</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button variant="outline" size="sm" className="text-xs h-8 px-2 sm:px-3 sm:text-sm">
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>

                {/* Mobile comments toggle */}
                <Sheet open={commentsOpen} onOpenChange={setCommentsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="ml-1 md:hidden">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md">
                    <div className="h-full overflow-auto">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Comments</h3>
                        <Button variant="ghost" size="icon" onClick={() => setCommentsOpen(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-muted/50 p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-6 w-6 rounded-full bg-blue-500" />
                            <div>
                              <p className="text-sm font-medium">Orlando Diggs</p>
                              <p className="text-xs text-muted-foreground">22 hours ago</p>
                            </div>
                          </div>
                          <p className="text-sm">Can you make it more interesting?</p>
                        </div>
                        <div className="rounded-lg bg-muted/50 p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-6 w-6 rounded-full bg-green-500" />
                            <div>
                              <p className="text-sm font-medium">Nikky Eva</p>
                              <p className="text-xs text-muted-foreground">23 hours ago</p>
                            </div>
                          </div>
                          <p className="text-sm">
                            Yeah, sure. I was thinking about adding live comment feature to the application, what do you
                            think about it? Do you have any other ideas which we can implement?
                          </p>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-col md:flex-row">
            {/* Editor */}
            <div className="flex-1 p-3 sm:p-6">
              {/* Toolbar */}
              <div className="mb-4 flex flex-wrap items-center gap-1 sm:gap-2 border-b pb-4">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Redo className="h-4 w-4" />
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Strikethrough className="h-4 w-4" />
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <List className="h-4 w-4" />
                </Button>
                <div className="h-4 w-px bg-border" />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignJustify className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Project overview</h2>
                <div className="rounded-md bg-muted/50 p-3 text-sm text-muted-foreground">
                  A overview of the project, goals and outcomes
                </div>
              </div>
            </div>

            {/* Comments sidebar - desktop only */}
            <div className="hidden md:block w-full md:w-80 border-t md:border-t-0 md:border-l">
              <div className="p-4 border-b">
                <h3 className="font-medium mb-2">Comments</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-6 w-6 rounded-full bg-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Orlando Diggs</p>
                        <p className="text-xs text-muted-foreground">22 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm">Can you make it more interesting?</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-6 w-6 rounded-full bg-green-500" />
                      <div>
                        <p className="text-sm font-medium">Nikky Eva</p>
                        <p className="text-xs text-muted-foreground">23 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      Yeah, sure. I was thinking about adding live comment feature to the application, what do you think
                      about it? Do you have any other ideas which we can implement?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="py-20" id='features'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-16">
            Powerful Features for <a className='text-blue-600 dark:text-sky-500 '>Modern Collaboration </a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Real-time Editing"
              description="Multiple users can edit the same document simultaneously with instant updates and smooth collaboration."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Active Collaborators"
              description="See who's currently viewing or editing your document with real-time presence indicators."
            />
            <FeatureCard
              icon={<Share2 className="h-8 w-8" />}
              title="Easy Sharing"
              description="Share documents via email or link with customizable view/edit permissions."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Comments & Discussions"
              description="Add inline and general comments with threaded discussions for better communication."
            />
            <FeatureCard
              icon={<Bell className="h-8 w-8" />}
              title="Smart Notifications"
              description="Stay updated with notifications for document shares, comments, and collaborator activities."
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8" />}
              title="Responsive Design"
              description="Access and edit your documents seamlessly across all devices and screen sizes."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Experience Real-time Collaboration
              </h2>
              <div className="space-y-4">
                <Feature title="Create & Manage Documents" description="Create, organize, and manage all your documents in one place." />
                <Feature title="Real-time Updates" description="See changes instantly as collaborators edit the document." />
                <Feature title="Version History" description="Track changes and restore previous versions when needed." />
                <Feature title="Secure Sharing" description="Control access and permissions for each document." />
              </div>

              <a href="https://live-docs-main-eight.vercel.app">
              
              <Button className="mt-8" size="lg">Try Demo</Button>

              </a>

            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="LiveDocs Demo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6" />
              <span className="font-bold text-xl">LiveDocs</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                © 2025 LiveDocs. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default App;