'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Define items with empty href properties
const resourceCategories = [
  {
    title: "Question Banks",
    items: [
      { name: "Digital Electronics and Computer Organisation", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FQuestion%20Banks%2FDECO%20FINAL%20ANSWER%20KEY.pdf?alt=media&token=bfcfd984-e48a-4abc-bc23-0d3a482db95d" },
      { name: "Operations Research", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FQuestion%20Banks%2FOR_unite_1-5.pdf?alt=media&token=04b55811-0b83-44c8-84cd-55eb978a3c03" },
      { name: "Discrete Mathematics", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FQuestion%20Banks%2FDM%20student%20question%20bank%2026-oct-2024.pdf?alt=media&token=ca0ea743-3cab-4804-940a-75171507498f" },
      { name: "Data Structures", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FQuestion%20Banks%2FDS%201%2C2%2C3.pdf?alt=media&token=5484c09d-3224-4662-8a89-31f912a2009a" },
      { name: "Python Programming", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FQuestion%20Banks%2FPP%20Question%20Bank%20CIE2425.pdf?alt=media&token=c654b969-6726-410b-a101-ee573ab36283" },
    ]
  },
  {
    title: "CIE 1 Question Papers",
    items: [
      { name: "Digital Electronics and Computer Organisation", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FCIE%201%20Question%20Papers%2FDECO_CIE1_QP.pdf?alt=media&token=44da6756-253f-45f4-9142-95641126ae2d" },
      { name: "Operations Research", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FCIE%201%20Question%20Papers%2FOR_CIE1_QP.pdf?alt=media&token=581746d1-7c85-4616-8eab-5fea6e706772" },
      { name: "Discrete Mathematics", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FCIE%201%20Question%20Papers%2FDM_CIE1_QP.pdf?alt=media&token=25ff0f91-0017-46b9-b51f-79ed701eac41" },
      { name: "Data Structures", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FCIE%201%20Question%20Papers%2FDS_CIE1_QP.pdf?alt=media&token=a73ffb95-f786-4a6f-ac82-4577786f8a61" },
      { name: "Python Programming", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FCIE%201%20Question%20Papers%2FPP_CIE1_QP.pdf?alt=media&token=9291edc1-702d-45d9-9e05-9a56d567ec1d" }
    ]
  },
  {
    title: "CIE 2 Question Papers",
    items: [
      { name: "Digital Electronics and Computer Organisation", href: "" },
      { name: "Operations Research", href: "" },
      { name: "Discrete Mathematics", href: "" },
      { name: "Data Structures", href: "" },
      { name: "Python Programming", href: "" }
    ]
  },
  {
    title: "SEE Question Papers",
    items: [
      { name: "Digital Electronics and Computer Organisation", href: "" },
      { name: "Operations Research", href: "" },
      { name: "Discrete Mathematics", href: "" },
      { name: "Data Structures", href: "" },
      { name: "Python Programming", href: "" }
    ]
  },
  {
    title: "Pre-Final Question Papers",
    items: [
      { name: "Digital Electronics and Computer Organisation", href: "" },
      { name: "Operations Research", href: "" },
      { name: "Discrete Mathematics", href: "" },
      { name: "Data Structures", href: "" },
      { name: "Python Programming", href: "" }
    ]
  },
  {
    title: "Lab Manuals",
    items: [
      { name: "Python Programming Lab", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FLab%20Manuals%2FPython%20Programming%20Lab%20Manual%20A.Y%20%2024-25%20(1).pdf?alt=media&token=1bfe6521-cc38-40cd-a42c-bf819e03a67b" },
      { name: "Data Structures Lab", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FLab%20Manuals%2FDS%2024-25%20%20%20print.pdf?alt=media&token=df51bebd-74f4-4066-93ae-9e1fa83e0c71" },
      { name: "Data Visualisation Lab", href: "https://firebasestorage.googleapis.com/v0/b/archivos-cs30.appspot.com/o/Semester%2003%2FLab%20Manuals%2FManual%20-DV.pdf?alt=media&token=c2bc9602-342f-468b-8569-bba676752436" }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            delen
          </Link>
        </div>
      </header>

      <main className="pt-20 pb-12">
        <section className="container mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Academic Resources
          </motion.h1>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {resourceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center">
                        <span className="text-sm">{item.name}</span>
                        <Link href={item.href}>
                          <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700">
                            <Download className="w-4 h-4" />
                            <span className="sr-only">Download {item.name}</span>
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>
      </main>
      
      <footer className="text-center pb-4">
        <p className="text-sm text-white bg-gray-800 px-3 py-1 rounded-full inline-block">
          semester 1
        </p>
      </footer>
    </div>
  )
}
