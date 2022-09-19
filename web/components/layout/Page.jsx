import Header from "@/components/Header"

function Page({ children }) {
  return (
    <div className="space-y-4">
      <Header />
      <div>{children}</div>
      <div></div>
    </div>
  )
}

export default Page;