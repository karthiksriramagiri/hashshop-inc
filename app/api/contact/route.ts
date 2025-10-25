import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send notification to Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    
    if (slackWebhookUrl) {
      const slackMessage = {
        text: "New Contact Form Submission",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "📧 New Contact Form Submission"
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Name:*\n${name}`
              },
              {
                type: "mrkdwn",
                text: `*Email:*\n${email}`
              },
              {
                type: "mrkdwn",
                text: `*Phone:*\n${phone || 'Not provided'}`
              },
              {
                type: "mrkdwn",
                text: `*Company:*\n${company || 'Not provided'}`
              },
              {
                type: "mrkdwn",
                text: `*Subject:*\n${subject || 'General Inquiry'}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${message}`
            }
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: `📅 ${new Date().toLocaleString('en-US', {
                  timeZone: 'America/Los_Angeles',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} PST`
              }
            ]
          }
        ]
      }

      const slackResponse = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      })

      if (!slackResponse.ok) {
        console.error('Failed to send Slack notification:', await slackResponse.text())
        // Don't fail the request if Slack notification fails
      }
    } else {
      console.log('Slack webhook URL not configured, skipping notification')
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
