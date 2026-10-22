import { AlertBox } from "./components/AlertBox/AlertBox"

export function DisplayApp() {

  return (
    <div>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
    </div>
  )
}

